// https://github.com/YYsuni/react18-json-view

import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css';

const data = {
  data: [
    {
      type: 'articles',
      id: '1',
      attributes: {
        title: 'JSON:API paints my bikeshed!',
        body: 'The shortest article. Ever.',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: { id: '42', type: 'people' },
        },
      },
    },
  ],
  included: [
    {
      type: 'people',
      id: '42',
      attributes: {
        name: 'John',
        age: 80,
        gender: 'male',
      },
    },
  ],
};

function ResponsePreview() {
  return (
    <>
      <div>
        <JsonView src={data} />
      </div>
    </>
  );
}

export default ResponsePreview;
