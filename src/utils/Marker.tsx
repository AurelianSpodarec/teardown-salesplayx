import React, { useEffect, useRef } from 'react';

const Marker = ({ children, word }: any) => {
  const markerRef = useRef();

  useEffect(() => {
    let marker = markerRef.current;
    let width = marker.offsetWidth;
    let height = 2 * marker.offsetHeight;
    let ns = 'http://www.w3.org/2000/svg';

    // Create the SVG element
    let svg = document.createElementNS(ns, 'svg');

    // Set attributes for the SVG element
    svg.style.width = `${width}px`;
    svg.style.height = `${height}px`;
    // svg.style.transform = `scale(${width / height}, 1)`;
    svg.style.transform = `scale(${(1.4 * width) / height}, 1)`;
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    svg.setAttribute('viewBox', '-1 -1 2 2');

    // Append SVG to the marker element
    marker.appendChild(svg);

    // Create the path element
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('pathLength', '100');
    path.setAttribute('vector-effect', 'non-scaling-stroke');
    svg.appendChild(path);

    // Show the path immediately
    setCircle(true);

    // Function to handle path drawing
    function setCircle(showElement) {
      path.style.visibility = showElement ? 'visible' : 'hidden';

      const pathLength = 1000 * path.getTotalLength();

      // Set path attributes and styles
      path.setAttribute('d', circlePath(-0.15, 0.05, 150, 190, 0.05, 0.3));
      path.setAttribute('stroke-dasharray', pathLength);
      path.setAttribute('stroke-dashoffset', pathLength);
    }

    // Function to generate a circle path
    function circlePath(dr_min, dr_max, θ0_min, θ0_max, dθ_min, dθ_max) {
      let c = 0.551915024494,
        β = Math.atan(c),
        d = Math.sqrt(c * c + 1 * 1),
        r = 0.9,
        θ = ((θ0_min + Math.random() * (θ0_max - θ0_min)) * Math.PI) / 180,
        path = 'M';

      path += [r * Math.sin(θ), r * Math.cos(θ)];
      path += ' C' + [d * r * Math.sin(θ + β), d * r * Math.cos(θ + β)];

      for (let i = 0; i < 4; i++) {
        θ += (Math.PI / 2) * (1 + dθ_min + Math.random() * (dθ_max - dθ_min));
        r *= 1 + dr_min + Math.random() * (dr_max - dr_min);
        path += ' ' + (i ? 'S' : '') + [d * r * Math.sin(θ - β), d * r * Math.cos(θ - β)];
        path += ' ' + [r * Math.sin(θ), r * Math.cos(θ)];
      }
      return path;
    }
  }, [word, children]);

  return (
    <span className="marker" ref={markerRef}>
      {children ? children : word}
    </span>
  );
};

export default Marker
