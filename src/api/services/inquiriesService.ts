import { apiClient, ApiError } from "../apiClient";

export interface InquiryPayload {
  name: string;
  company?: string | null;
  email: string;
  whatsapp?: string | null;
  product_line: string;
  quantity?: string | null;
  destination_country: string;
  customisation?: string | null;
  message: string;
  source_url?: string | null;
}

export interface InquiryValidationErrors {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  product_line?: string;
  quantity?: string;
  destination_country?: string;
  customisation?: string;
  message?: string;
  source_url?: string;
  [key: string]: string | undefined;
}

export interface InquiryResponse {
  success: boolean;
  message: string;
  id?: number | string;
  errors?: InquiryValidationErrors;
  data?: unknown;
}

export const inquiriesService = {
  /**
   * Submits an inquiry to POST /inquiries
   */
  async submitInquiry(payload: InquiryPayload): Promise<InquiryResponse> {
    try {
      // Normalize optional empty fields to null and trim string values
      const sanitizedPayload: InquiryPayload = {
        name: payload.name.trim(),
        company: payload.company?.trim() || null,
        email: payload.email.trim(),
        whatsapp: payload.whatsapp?.trim() || null,
        product_line: payload.product_line.trim(),
        quantity: payload.quantity?.trim() || null,
        destination_country: payload.destination_country.trim(),
        customisation: payload.customisation?.trim() || null,
        message: payload.message.trim(),
        source_url:
          payload.source_url?.trim() ||
          (typeof window !== "undefined" ? window.location.href : null),
      };

      const result = await apiClient.post<
        { id?: number | string; message?: string },
        InquiryPayload
      >("/inquiries", sanitizedPayload, {
        Accept: "application/json",
      });

      console.log("Inquiries API response:", result);

      return {
        success: true,
        message:
          result?.message || "Thank you. We reply within one working day.",
        id: result?.id,
        data: result,
      };
    } catch (err: unknown) {
      console.error("Inquiries API error:", err);
      if (err instanceof ApiError) {
        const details = err.details as {
          message?: string;
          errors?: Record<string, string[] | string>;
        } | null;

        const fieldErrors: InquiryValidationErrors = {};
        if (details?.errors && typeof details.errors === "object") {
          for (const [key, val] of Object.entries(details.errors)) {
            fieldErrors[key] = Array.isArray(val) ? val[0] : String(val);
          }
        }

        return {
          success: false,
          message:
            details?.message ||
            err.message ||
            "Unable to submit inquiry. Please review your input and try again.",
          errors: Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined,
        };
      }

      return {
        success: false,
        message:
          (err as Error)?.message ||
          "A network error occurred. Please check your connection and try again.",
      };
    }
  },
};
