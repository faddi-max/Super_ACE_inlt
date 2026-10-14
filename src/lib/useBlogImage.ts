import { useEffect, useState } from "react";

const imageBlobCache = new Map<string, string>();

/**
 * Custom hook to load blog images, bypassing ngrok free-tier browser interstitials
 * by fetching with the 'ngrok-skip-browser-warning' header and converting to an object blob URL.
 * Falls back immediately to the local fallback asset on error or while loading.
 */
export function useBlogImage(
  imageUrl?: string | null,
  fallbackImage: string = "",
): { src: string; onError: () => void } {
  const [blobSrc, setBlobSrc] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);

  // If cached or non-ngrok URL, use directly
  const cached = imageUrl ? imageBlobCache.get(imageUrl) : null;
  const directSrc = !imageUrl
    ? fallbackImage
    : cached || (!imageUrl.includes("ngrok") ? imageUrl : null);

  useEffect(() => {
    if (
      !imageUrl ||
      !imageUrl.includes("ngrok") ||
      imageBlobCache.has(imageUrl)
    ) {
      return;
    }

    let active = true;

    fetch(imageUrl, {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        const objectUrl = URL.createObjectURL(blob);
        imageBlobCache.set(imageUrl, objectUrl);
        if (active) {
          setBlobSrc(objectUrl);
        }
      })
      .catch((err) => {
        console.warn("Failed to load ngrok blog image via blob:", err);
      });

    return () => {
      active = false;
    };
  }, [imageUrl]);

  const handleError = () => {
    setHasError(true);
  };

  const finalSrc = hasError
    ? fallbackImage
    : blobSrc || directSrc || fallbackImage;

  return { src: finalSrc, onError: handleError };
}
