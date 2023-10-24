import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function RequestInput() {
  return (
    <>
      <div className='flex flex-row'>
        <div className='flex flex-col w-1/4'>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder='GET' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='get'>GET</SelectItem>
              <SelectItem value='post'>POST</SelectItem>
              <SelectItem value='put'>PUT</SelectItem>
              <SelectItem value='delete'>DELETE</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col w-full'>
          <Input />
        </div>
      </div>
    </>
  );
}

export default RequestInput;
