CREATE TABLE public.federation_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  organisation_name TEXT NOT NULL,
  country TEXT NOT NULL,
  region TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  contact_role TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  athletes_estimate TEXT,
  membership_type TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.federation_applications TO anon;
GRANT INSERT ON public.federation_applications TO authenticated;
GRANT ALL ON public.federation_applications TO service_role;

ALTER TABLE public.federation_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a federation application"
ON public.federation_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);