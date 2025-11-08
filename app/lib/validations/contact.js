import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .min(5, 'Email is required')
    .max(100, 'Email must be less than 100 characters'),
  
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .min(10, 'Phone number must be 10 digits')
    .max(10, 'Phone number must be 10 digits'),
  
  service: z
    .string()
    .min(1, 'Please select a service')
    .max(100, 'Service name is too long'),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
    .optional()
    .or(z.literal('')),
});
