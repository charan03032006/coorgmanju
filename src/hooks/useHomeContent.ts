import { useEffect, useState } from 'react';
import { getHomeContent } from '@/services/contentService';

export function useHomeContent() {
  const [content, setContent] = useState<Awaited<ReturnType<typeof getHomeContent>> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    getHomeContent().then((result) => { if (active) setContent(result); }).catch((err: unknown) => { if (active) setError(err instanceof Error ? err.message : 'Unable to load hotel content.'); }).finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);
  return { content, loading, error };
}
