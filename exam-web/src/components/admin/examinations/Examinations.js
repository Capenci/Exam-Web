import { Radio } from 'antd';
import React, { useState } from 'react';
function Examinations() {
  const [value, setValue] = useState('a');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <Radio.Group value={value} onChange={handleChange}>
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
      <Radio value="c">Option C</Radio>
    </Radio.Group>
  );
}
export default Examinations;