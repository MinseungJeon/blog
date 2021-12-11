import React from 'react';
import { FlexboxGrid, Panel } from 'rsuite';
import Image from 'next/image';

const List = () => {
  return (
    <FlexboxGrid justify="center">
      <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 }}>
        <Image
          src="https://via.placeholder.com/240x240"
          alt="Landscape picture"
          width={500}
          height={500}
        />
        <Panel header="RSUITE">
          <p>
            <small>
              A suite of React components, sensible UI design, and a friendly development
              experience.
            </small>
          </p>
        </Panel>
      </Panel>
    </FlexboxGrid>
  );
};

export default List;
