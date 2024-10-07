import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const folder = searchParams.get('folder'); // Get folder name from query parameters

  if (!folder) {
    return NextResponse.json({ error: 'Folder name is required' }, { status: 400 });
  }

  const dirRelativeToPublicFolder = `/${folder}`; // Assuming images are in the public/{folder}

  // Correctly resolve the path to the `public` directory using process.cwd()
  const dir = path.join(process.cwd(), 'public', folder);

  console.log("The directory will be:", dir); // This should now print the correct path

  // Check if the folder exists
  if (!fs.existsSync(dir)) {
    return NextResponse.json({ error: 'Folder not found' }, { status: 404 });
  }

  // Read filenames from the directory
  const filenames = fs.readdirSync(dir);

  // Map filenames to their relative URLs
  const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name).replace(/\\/g, '/'));

  return NextResponse.json(images);
}
