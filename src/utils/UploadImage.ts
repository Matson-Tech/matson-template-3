
import type { User } from '@/types/wedding';

const uploadImage = async (file: File, user: User | null, fileName: string): Promise<string> => {
  // For now, return a placeholder URL
  // In a real implementation, this would upload to Supabase storage
  return URL.createObjectURL(file);
};

export default uploadImage;
