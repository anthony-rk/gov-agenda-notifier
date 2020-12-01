import React, { useState } from 'react';
import './MeetingView.scss';

import { CheckedCheckboxIcon, UncheckedCheckboxIcon } from '../../utils/_icons';

const TEST_ITEMS = [1,2,3,4,5].map(makeTestItem);

function makeTestItem(index) {
  const status = index <= 2 ? 'Completed' : index === 3 ? 'In Progress' : 'Pending';
  return {
    title: `${index} Agenda Group`,
    description: '',
    status,
    items: [1,2,3,4].map((i, j) => makeTestSubItem(i, j, status))
  }
}

function makeTestSubItem(parentIndex, index, status) {
  return {
    title: `${parentIndex}.${index} Agenda Item`,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel nisl euismod, tristique leo sit amet, eleifend enim.',
    status,
    items: []
  }
}

function MeetingView() {
    const [ items, setItems ] = useState(TEST_ITEMS);
    const [ showCompleted, setShowCompleted ] = useState(false);

    return (
        <div className="meeting-view">
            <div
              className="complete-toggle"
              onClick={() => setShowCompleted(completed => !completed)}
            >
              {showCompleted ? <CheckedCheckboxIcon /> : <UncheckedCheckboxIcon />}
              <p>Show Completed Items</p>
            </div>


        </div>
    );
}

export default MeetingView;
