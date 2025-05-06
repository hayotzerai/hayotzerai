import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  const [isChildOpen, setIsChildOpen] = useState(false);

  const openChild = () => setIsChildOpen(true);
  const closeChild = () => setIsChildOpen(false);

  return (
    <div>
      <button onClick={openChild} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Child Component
      </button>

      {isChildOpen && <ChildComponent closeChild={closeChild} />}
    </div>
  );
};

export default ParentComponent;


import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  const [isChildOpen, setIsChildOpen] = useState(false);

  const handleCloseFromChild = () => {
    console.log("Child requested to close!");
    setIsChildOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsChildOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Open Child Component
      </button>

      {isChildOpen && <ChildComponent closeParent={handleCloseFromChild} />}
    </div>
  );
};

export default ParentComponent;

