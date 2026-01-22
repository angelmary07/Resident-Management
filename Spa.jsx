// src/SPA.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function SPA() {
  return (
    <BrowserRouter>
      <div className="container my-5">
        {/* Navigation */}
        <nav className="mb-5">
          <ol className="list-group list-group-horizontal justify-content-center gap-4">
            <li className="list-group-item">
              <Link smooth to="#section1" className="text-decoration-none fw-bold">
                First Section
              </Link>
            </li>
            <li className="list-group-item">
              <Link smooth to="#section2" className="text-decoration-none fw-bold">
                Second Section
              </Link>
            </li>
            <li className="list-group-item">
              <Link smooth to="#section3" className="text-decoration-none fw-bold">
                Third Section
              </Link>
            </li>
          </ol>
        </nav>

        {/* Sections */}
        <section
          id="section1"
          style={{
            padding: "50vh 20px",
            borderBottom: "1px solid #ddd",
            background: "linear-gradient(to right, #f0f4ff, #e6f0ff)",
            borderRadius: "12px",
            marginBottom: "40px",
          }}
        >
          <h1 className="text-center mb-4">First Section</h1>
          <p className="lead text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat nunc, auctor vel felis eget, 
            elementum feugiat sem. Sed euismod, nunc eget aliquam tincidunt, nunc nisl aliquam nisl, 
            eget aliquam nisl nunc eget nisl. Sed euismod, nunc eget aliquam tincidunt...
          </p>
        </section>

        <section
          id="section2"
          style={{
            padding: "50vh 20px",
            borderBottom: "1px solid #ddd",
            background: "linear-gradient(to right, #fff0f5, #ffe6f0)",
            borderRadius: "12px",
            marginBottom: "40px",
          }}
        >
          <h1 className="text-center mb-4">Second Section</h1>
          <p className="lead text-center">
            Vivamus rutrum ultricies ligula, id sagittis purus tristique id. 
            Proin accumsan, nunc et semper tincidunt, nunc nisl aliquam nisl, 
            eget aliquam nisl nunc eget nisl. Sed euismod, nunc eget aliquam tincidunt...
          </p>
        </section>

        <section
          id="section3"
          style={{
            padding: "50vh 20px",
            borderBottom: "1px solid #ddd",
            background: "linear-gradient(to right, #f0fff0, #e6ffe6)",
            borderRadius: "12px",
          }}
        >
          <h1 className="text-center mb-4">Third Section</h1>
          <p className="lead text-center">
            Mauris pretium sit amet risus eget varius. Phasellus gravida mi mauris, 
            sit amet facilisis justo ultricies id. Sed euismod, nunc eget aliquam tincidunt, 
            nunc nisl aliquam nisl, eget aliquam nisl nunc eget nisl...
          </p>
        </section>
      </div>
    </BrowserRouter>
  );
}