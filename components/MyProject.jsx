import React from 'react'
import Container from './Container'
import WebOne from './WebOne';

const MyProject = () => {
  return (
    <Container>
      <div className="text-gray-400">
        <h2 className="font-bold text-gray-400 text-xl sm:text-2xl sm:text-left mb-4">
          My Project
        </h2>
        <div>
            <WebOne/>
        </div>
      </div>
    </Container>
  );
}

export default MyProject