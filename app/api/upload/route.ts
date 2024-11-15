import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_ACCESS_ID!,
    secretAccessKey: process.env.CLOUDFLARE_ACCESS_KEY!,
  }
});
export async function POST(req: Request, res: Response) {
  const body = await req.json();
  // const fileName = body.fileName
  const fileSize = body.fileSize;
  const cryptoName = crypto.randomUUID();
  const fileName = cryptoName + ".png";
  const imageurl = `https://pub-bc643a7d95cf4f0c868795a605a6e376.r2.dev/${fileName}`;
  // console.log(imageurl);

  // console.log(fileName, fileSize);

  if (!fileName || fileName.trim().length < 5) {
    return new Response('Invalid name or size', { 'status': 400 });
  } else if (fileSize > 0 && fileSize > 5 * 1024 * 1024) {
    return new Response('Size is bigger than 5MB', { 'status': 400 });
  }
  const link = await getSignedUrl(s3Client, new PutObjectCommand({
    Bucket: 'signature',
    Key: fileName,
    ContentLength: fileSize,
    ContentType: 'image/png',

  }), {
    expiresIn: 3600,
  });

  const file = {
    uploadURL: link,
    getURL: imageurl,
  }

  return Response.json(file, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'content-Disposition': 'inline',
      'Access-Control-Allow-Origin': '*',
    }
  });
}