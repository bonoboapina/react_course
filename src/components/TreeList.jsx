import React from 'react';
import StateNode from './StateNode';
import '../styles/treelist.css';

export default class TreeList extends React.Component {

  static propTypes = {
    objectRoot: React.PropTypes.object,
  };

  static defaultProps = {
    objectRoot: {},
  };

  render() {
    const { objectRoot, } = this.props;
    return (
      <ul className='tree-list'>
        <li>
          <ul className='tree-list'>
            {Object.keys(objectRoot)
              .map(k => ({ k, v: objectRoot[k], }))
              .map(({ k, v, }) => (
                <li key={k}>
                  <StateNode
                    name={k}
                    subject={v} />
                </li>)
              )}
          </ul>
        </li>
      </ul>
    );
  }
}

