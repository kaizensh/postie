import { Textarea } from '@/components/ui/textarea';

interface TextAreaProps {
  className: string;
}

function RequestBody(props: TextAreaProps) {
  return (
    <div>
      <Textarea className={props.className} />
    </div>
  );
}

export default RequestBody;
