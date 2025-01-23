import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

const heroDataPath = path.join(process.cwd(), 'data/hero.json');
const uploadsDir = path.join(process.cwd(), 'public/images');

// Ensure directories exist
if (!fs.existsSync(path.dirname(heroDataPath))) {
  fs.mkdirSync(path.dirname(heroDataPath), { recursive: true });
}
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Initialize hero.json if it doesn't exist
if (!fs.existsSync(heroDataPath)) {
  const initialData = {
    name: "Aakib Ansari",
    description: "Dynamic web developer and digital marketer with expertise in modern web technologies, SEO, and social media advertising.",
    email: "aakiba6619@gmail.com",
    profileImage: "/images/profile.jpg",
    skills: ["React", "Node.js", "JavaScript", "SEO"],
    badges: [
      {
        title: "Digital Marketing",
        subtitle: "Social Media Expert",
        icon: "Globe2"
      },
      {
        title: "Web Development",
        subtitle: "Modern Technologies",
        icon: "Code2"
      }
    ]
  };
  fs.writeFileSync(heroDataPath, JSON.stringify(initialData, null, 2));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(heroDataPath, 'utf8');
      return res.status(200).json(JSON.parse(data));
    } catch (error) {
      console.error('Error reading hero data:', error);
      return res.status(500).json({ error: 'Failed to read hero data' });
    }
  }

  if (req.method === 'POST') {
    try {
      const form = formidable({
        uploadDir: uploadsDir,
        keepExtensions: true,
        maxFileSize: 5 * 1024 * 1024, // 5MB limit
      });

      const [fields, files] = await new Promise<[any, any]>((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve([fields, files]);
        });
      });

      // Read existing data
      const existingData = JSON.parse(fs.readFileSync(heroDataPath, 'utf8'));
      
      // Update text fields
      const updatedData = {
        ...existingData,
        name: fields.name?.[0] || existingData.name,
        description: fields.description?.[0] || existingData.description,
        email: fields.email?.[0] || existingData.email,
        skills: fields.skills ? JSON.parse(fields.skills[0]) : existingData.skills,
      };

      // Handle profile image upload
      if (files.profileImage) {
        const file = files.profileImage[0];
        const fileName = 'profile' + path.extname(file.originalFilename || '');
        const newPath = path.join(uploadsDir, fileName);
        
        // Remove old file if it exists and is different
        if (fs.existsSync(newPath) && newPath !== file.filepath) {
          fs.unlinkSync(newPath);
        }
        
        // Move the uploaded file to the correct location
        fs.renameSync(file.filepath, newPath);
        updatedData.profileImage = `/images/${fileName}`;
      }

      // Save updated data
      fs.writeFileSync(heroDataPath, JSON.stringify(updatedData, null, 2));
      return res.status(200).json(updatedData);
    } catch (error) {
      console.error('Error updating hero:', error);
      return res.status(500).json({ error: 'Failed to update hero data' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
