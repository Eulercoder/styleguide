import React, { PropTypes } from 'react';
import ComponentPlayground from 'component-playground';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import './index.styl';

const Playground = ({ component, example, name }) => (
  <div className="react-component-playground">
    <ComponentPlayground
      codeText={getExample(name)}
      scope={{ React, [name]: component }}
    />
  </div>
);

Playground.propTypes = {
  component: PropTypes.any.isRequired,
  example: PropTypes.string,
  name: PropTypes.string
};

/* HACK: the examples will be autogenerated from the react-components lib */
const SelectExample = `<Select
  options={[
    'Zoey Andrews',
    'Jerry Woods',
    'Marion Garza'
  ]}
  selected={2}
  handleChange={(e) => { console.log(e.target.value); }}
  label="Select user"
/>`;
const EmptyStateExample = '<EmptyState />';
const TryBannerExample = '<TryBanner />';

function getExample(name) {
  switch (name) {
    case 'Select':
      return SelectExample;
    case 'EmptyState':
      return EmptyStateExample;
    case 'TryBanner':
      return TryBannerExample;
    default:
      return 'Nothing';
  }
}

export default Playground;
