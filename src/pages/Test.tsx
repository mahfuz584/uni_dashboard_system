import React, { useState } from "react";

const Test = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewFile, setPreviewFile] = useState<string | null>(null);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     setSelectedFile(file);
  //   }
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const res = e.target?.result;
  //     if (res) {
  //       setPreviewFile(res as string);
  //     }
  //   };

  //   reader.readAsDataURL(file as Blob);
  // };

  // const downloadImage = () => {
  //   if (!previewFile) return;
  //   const byteString = atob(previewFile.split(",")[1]);
  //   const mimeType = previewFile.split(",")[0].split(":")[1].split(";")[0]; // Get MIME type
  //   const arrayBuffer = new ArrayBuffer(byteString.length);
  //   const uint8Array = new Uint8Array(arrayBuffer);
  //   for (let i = 0; i < byteString.length; i++) {
  //     uint8Array[i] = byteString.charCodeAt(i);
  //   }
  //   const blob = new Blob([uint8Array], { type: mimeType });

  //   // Create a link and trigger download
  //   const link = document.createElement("a");
  //   link.href = URL.createObjectURL(blob);
  //   link.download = "image.png"; // Change the filename as needed
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);
      const blobURl = URL.createObjectURL(file);
      setPreviewFile(blobURl);
    }
  };
  const downloadImage = () => {
    if (!selectedFile) return;

    // Create a link and trigger download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(selectedFile); // Use the Blob directly
    link.download = selectedFile.name; // Set the filename to the original file name
    link.click(); // Trigger the download
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">submit</button>
      </form>
      <div className="border-2 rounded-lg size-28 p-[4px]">
        {previewFile && (
          <>
            <img
              className="w-full h-full object-cover rounded-md"
              src={previewFile}
              alt="preview"
            />
            <button onClick={downloadImage}>Download Image</button>
          </>
        )}
      </div>
    </>
  );
};

export default Test;
