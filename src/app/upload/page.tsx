// src/app/about/page.tsx
"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import React, { useState } from 'react';
import { File } from 'lucide-react';

const AboutPage = () => {
  const handleFileChange = (event: any) => {
    if(event.target != null){
      if(event.target.files[0] != null){
        setSelectedFile(event.target.files[0]);
        setSelectedFileName(event.target.files[0]?.name || '');
        console.log(event.target.files[0]?.name)
      }
    }
    

    };

    const onSubmit = () =>{
    //submit file logic here
    }
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedFileName, setSelectedFileName] = useState('');

    return (
    <div className="max-w-screen-lg w-[1600px] mx-auto py-2">
      <Card>
        <CardHeader>
          <CardTitle>
            iTongue Upload
          </CardTitle>
          <CardDescription>
            Upload image of tongue for analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label className="flex items-center px-4 py-2 bg-muted dark:text-white text-black rounded-md cursor-pointer mx-auto w-full items-center justify-center">
            <span className="mr-2 flex items-center gap-4"> <File/> Choose File</span>
            <input type="file" className="hidden" onChange={handleFileChange} />
          </label>

          {selectedFile ? 
            <div className="w-full mt-5">
              <h1>{selectedFileName}</h1>
              <Button className="w-full">Start</Button>
            </div> 
            : null
          }
        </CardContent>
      </Card>
    </div>
);
};

export default AboutPage;
