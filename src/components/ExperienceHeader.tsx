"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Curriculum from "./Curriculum";
import { useEffect, useState } from "react";

export default function ExperienceHeader() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold tracking-wide">Experience</h2>
      {isClient ? (
        <PDFDownloadLink
          document={<Curriculum />}
          fileName="Marcelo Cardoso - CV.pdf"
        >
          {() => (
            <button
              id="download-cv"
              className="inline-block text-sm font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
            >
              <span className="text-sm font-medium decoration-dashed hover:underline">
                Download CV
              </span>
            </button>
          )}
        </PDFDownloadLink>
      ) : null}
    </div>
  );
}
