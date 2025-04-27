import { useState, useRef } from "react";
import { UploadCloud, X, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onChange: (files: File[]) => void;
  value: File[];
  maxFiles?: number;
}

export function FileUpload({ onChange, value = [], maxFiles = 20 }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file: File) => {
    // Check if file is PDF or DOC
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      return 'Only PDF and Word documents are allowed';
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return 'File size must be less than 5MB';
    }
    
    return null;
  };

  const addFiles = (files: FileList | null) => {
    if (!files) return;
    
    setError(null);
    
    // Check if adding these files would exceed the max
    if (value.length + files.length > maxFiles) {
      setError(`You can only upload a maximum of ${maxFiles} files`);
      return;
    }
    
    const newFiles: File[] = [];
    const fileErrors: string[] = [];
    
    Array.from(files).forEach(file => {
      const error = validateFile(file);
      if (error) {
        fileErrors.push(`${file.name}: ${error}`);
      } else {
        newFiles.push(file);
      }
    });
    
    if (fileErrors.length > 0) {
      setError(fileErrors.join(". "));
    }
    
    if (newFiles.length > 0) {
      onChange([...value, ...newFiles]);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    addFiles(e.dataTransfer.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
  };

  const removeFile = (index: number) => {
    const newFiles = [...value];
    newFiles.splice(index, 1);
    onChange(newFiles);
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    
    if (extension === 'pdf') {
      return <FileText className="h-5 w-5 text-red-500" />;
    } else if (extension === 'doc' || extension === 'docx') {
      return <FileText className="h-5 w-5 text-blue-500" />;
    } else {
      return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 transition-colors flex flex-col items-center justify-center cursor-pointer",
          dragActive ? "border-primary/70 bg-primary/5" : "border-gray-300 hover:border-primary/50 hover:bg-gray-50"
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <UploadCloud className="h-10 w-10 text-gray-400 mb-2" />
          <p className="text-sm font-medium mb-1">
            Drag and drop your files here, or click to browse
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Support for PDF and Word documents (max 5MB each)
          </p>
          <input
            ref={inputRef}
            type="file"
            multiple
            onChange={handleChange}
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="hidden"
            disabled={value.length >= maxFiles}
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              inputRef.current?.click();
            }}
            disabled={value.length >= maxFiles}
          >
            Select Files
          </Button>
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-500 flex items-center">
          <AlertCircle className="h-4 w-4 mr-1" />
          {error}
        </div>
      )}

      {value.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
            {value.length} files selected {value.length >= maxFiles && `(maximum reached)`}
          </p>
          <div className="max-h-40 overflow-y-auto border rounded-md p-2">
            <ul className="space-y-2">
              {value.map((file, i) => (
                <li key={i} className="flex items-center justify-between text-sm p-2 bg-gray-50 rounded">
                  <div className="flex items-center">
                    {getFileIcon(file.name)}
                    <span className="ml-2 truncate max-w-[200px]">{file.name}</span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 text-gray-500 hover:text-red-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(i);
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}