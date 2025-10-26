import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileSpreadsheet, CheckCircle2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DataImport = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploaded, setUploaded] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        toast({
          title: "File Selected",
          description: `${selectedFile.name} is ready for upload`,
        });
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please upload a CSV or Excel file",
          variant: "destructive",
        });
      }
    }
  };

  const handleUpload = () => {
    if (file) {
      // Simulate upload
      setTimeout(() => {
        setUploaded(true);
        toast({
          title: "Upload Complete ✅",
          description: "Your data has been successfully imported",
        });
      }, 1500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Data Import</h1>
        <p className="text-muted-foreground">Upload your hospital's sustainability data</p>
      </div>

      {!uploaded ? (
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle>Upload CSV or Excel File</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="flex flex-col items-center gap-4">
                  <Upload className="w-16 h-16 text-muted-foreground" />
                  <div>
                    <p className="text-lg font-medium text-foreground">
                      {file ? file.name : "Drop your file here or click to browse"}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Supports CSV and Excel files (max 10MB)
                    </p>
                  </div>
                </div>
              </label>
            </div>

            {file && (
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileSpreadsheet className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
                <Button onClick={handleUpload} className="bg-primary hover:bg-primary/90">
                  Upload File
                </Button>
              </div>
            )}

            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Required Data Format:</p>
              <div className="bg-muted/30 rounded-lg p-4 text-xs font-mono">
                <div className="grid grid-cols-4 gap-2 text-muted-foreground">
                  <span>Department</span>
                  <span>Electricity (kWh)</span>
                  <span>Water (L)</span>
                  <span>Waste (kg)</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-gradient-success border-success/20 animate-scale-in">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <CheckCircle2 className="w-24 h-24 text-success-foreground mx-auto" />
              <div>
                <h3 className="text-2xl font-bold text-success-foreground">Upload Complete!</h3>
                <p className="text-success-foreground/80 mt-2">
                  Your data has been successfully imported and validated
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="bg-success-foreground/90 text-success hover:bg-success-foreground"
                >
                  View Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setFile(null);
                    setUploaded(false);
                  }}
                  className="border-success-foreground/30 text-success-foreground hover:bg-success-foreground/10"
                >
                  Upload Another File
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Validation Messages Card */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            Data Validation Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-success mt-0.5">✓</span>
              <span>Ensure all numeric values are positive numbers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success mt-0.5">✓</span>
              <span>Department names should match existing records</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success mt-0.5">✓</span>
              <span>Date format: YYYY-MM-DD</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success mt-0.5">✓</span>
              <span>Remove any empty rows before uploading</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataImport;
