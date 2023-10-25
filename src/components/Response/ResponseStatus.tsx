import { Badge } from '@/components/ui/badge';

function ResponseStatusBadges() {
  return (
    <div>
      <Badge variant='default'>200 OK</Badge>
      <Badge variant='secondary'>253 ms</Badge>
      <Badge variant='secondary'>1372 B</Badge>
    </div>
  );
}

function ResponseStatus() {
  return (
    <>
      <div className='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'>
        <ResponseStatusBadges />
      </div>
    </>
  );
}

export default ResponseStatus;
