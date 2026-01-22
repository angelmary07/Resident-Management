// src/pages/RatingStatistics.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function RatingStatistics() {
  const [inputs, setInputs] = useState({
    residents: '',
    workers: '',
    complaints: '',
    resolvedComplaints: '',
  });

  const [stats, setStats] = useState([]);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputs((prev) => ({ ...prev, [id]: value }));
  };

  const calculateStats = (e) => {
    e.preventDefault();

    const residents = parseInt(inputs.residents) || 0;
    const workers = parseInt(inputs.workers) || 0;
    const complaints = parseInt(inputs.complaints) || 0;
    const resolved = parseInt(inputs.resolvedComplaints) || 0;

    const totalPeople = residents + workers;
    const pending = complaints - resolved;
    const avgPerResident = residents > 0 ? (complaints / residents).toFixed(2) : '0.00';
    const needExtraStaff = pending > workers ? 'Yes' : 'No';
    const doubleWorkers = workers * 2;

    const newStats = [
      { title: 'Total Residents', value: residents },
      { title: 'Total Workers', value: workers },
      { title: 'Total People', value: totalPeople },
      { title: 'Total Complaints', value: complaints },
      { title: 'Resolved Complaints', value: resolved },
      { title: 'Pending Complaints', value: pending },
      { title: 'Avg Complaints per Resident', value: avgPerResident },
      { title: 'Need Extra Staff?', value: needExtraStaff },
      { title: 'If Workers Doubled', value: doubleWorkers },
    ];

    setStats(newStats);
  };

  const handleRating = (stars) => {
    setRating(stars);
  };

  const handleMouseOver = (stars) => {
    setHoverRating(stars);
  };

  const handleMouseOut = () => {
    setHoverRating(0);
  };

  return (
    <div style={{ background: 'linear-gradient(120deg, #fbe9cf 0%, #ffd47e 100%)', minHeight: '100vh' }}>
      <Container className="py-5">
        <Card
          className="page-box shadow-lg mx-auto"
          style={{
            background: '#fffbe6',
            padding: '38px 54px 30px',
            borderRadius: '22px',
            maxWidth: '900px',
            boxShadow: '0 10px 44px #ffd47e44, 0 2px 17px #ffe06621',
          }}
        >
          <Card.Body>
            <h2
              style={{
                color: '#e3881d',
                fontFamily: 'Georgia, serif',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              Interactive Community Stats
            </h2>
            <p className="text-center mb-4" style={{ color: '#87602a' }}>
              Enter values below and see the calculations instantly:
            </p>

            <Form onSubmit={calculateStats}>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Total Residents:</Form.Label>
                <Form.Control
                  type="number"
                  id="residents"
                  placeholder="Enter number of residents"
                  value={inputs.residents}
                  onChange={handleInputChange}
                  style={{
                    padding: '16px 24px',
                    borderRadius: '2.2em',
                    border: '1.6px solid #ffd47e',
                    background: '#ffefde',
                    color: '#87602a',
                    boxShadow: '0 2px 16px #ffd47e22 inset',
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Total Workers:</Form.Label>
                <Form.Control
                  type="number"
                  id="workers"
                  placeholder="Enter number of workers"
                  value={inputs.workers}
                  onChange={handleInputChange}
                  style={{
                    padding: '16px 24px',
                    borderRadius: '2.2em',
                    border: '1.6px solid #ffd47e',
                    background: '#ffefde',
                    color: '#87602a',
                    boxShadow: '0 2px 16px #ffd47e22 inset',
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Total Complaints:</Form.Label>
                <Form.Control
                  type="number"
                  id="complaints"
                  placeholder="Enter total complaints"
                  value={inputs.complaints}
                  onChange={handleInputChange}
                  style={{
                    padding: '16px 24px',
                    borderRadius: '2.2em',
                    border: '1.6px solid #ffd47e',
                    background: '#ffefde',
                    color: '#87602a',
                    boxShadow: '0 2px 16px #ffd47e22 inset',
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label style={{ color: '#a55f17', fontWeight: '700' }}>Resolved Complaints:</Form.Label>
                <Form.Control
                  type="number"
                  id="resolvedComplaints"
                  placeholder="Enter resolved complaints"
                  value={inputs.resolvedComplaints}
                  onChange={handleInputChange}
                  style={{
                    padding: '16px 24px',
                    borderRadius: '2.2em',
                    border: '1.6px solid #ffd47e',
                    background: '#ffefde',
                    color: '#87602a',
                    boxShadow: '0 2px 16px #ffd47e22 inset',
                  }}
                />
              </Form.Group>

              <div className="d-flex gap-3">
                <Button
                  type="submit"
                  className="flex-grow-1"
                  style={{
                    background: 'linear-gradient(90deg, #ffeacb 0%, #ffd47e 100%)',
                    color: '#6f412d',
                    fontWeight: '700',
                    border: 'none',
                    borderRadius: '2em',
                    padding: '1em 0',
                    boxShadow: '0 2px 18px #ffd47e77',
                    fontSize: '1.18em',
                  }}
                >
                  Show Stats
                </Button>

                <Button
                  type="button"
                  variant="outline-warning"
                  onClick={() => alert('Hello! Welcome to our Community 😊')}
                  style={{
                    borderRadius: '2em',
                    fontSize: '1.18em',
                    padding: '1em 2em',
                  }}
                >
                  Click Me!
                </Button>
              </div>
            </Form>

            {stats.length > 0 && (
              <Row id="statsBoxesRow" className="mt-4 g-3">
                {stats.map((stat, index) => (
                  <Col xs={6} sm={4} lg={4} key={index}>
                    <div
                      className="stat-box"
                      style={{
                        background: 'linear-gradient(120deg, #ffe066 80%, #fbe9cf 120%)',
                        color: '#232946',
                        borderRadius: '13px',
                        boxShadow: '0 2px 16px #c8a94144, 0 1px 7px #ffe06638',
                        padding: '17px 15px 13px 19px',
                        borderLeft: '6px solid #ffd47e',
                        minHeight: '100px',
                      }}
                    >
                      <div className="stat-title">{stat.title}</div>
                      <div className="stat-value">{stat.value}</div>
                    </div>
                  </Col>
                ))}
              </Row>
            )}

            <div className="stats-rate-section mt-5 pt-4 border-top border-warning border-2 text-center">
              <h3 style={{ color: '#e3881d', fontFamily: 'Georgia, serif' }}>
                Rate Our Community
              </h3>

              <div id="stars-row" className="d-flex justify-content-center gap-3 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className="starButton"
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => handleMouseOver(star)}
                    onMouseLeave={handleMouseOut}
                    style={{
                      fontSize: '70px',
                      color: star <= (hoverRating || rating) ? '#ffe066' : '#ffd700',
                      cursor: 'pointer',
                      transition: 'all 0.15s',
                      transform: star <= (hoverRating || rating) ? 'scale(1.16) rotate(-9deg)' : 'scale(1)',
                      filter: star <= (hoverRating || rating) ? 'drop-shadow(0 4px 10px #ffd700bb)' : 'drop-shadow(0 2px 8px #ffd70099)',
                    }}
                  >
                    <i className="fas fa-star"></i>
                  </span>
                ))}
              </div>

              {rating > 0 && (
                <div id="ratingText" className="mt-3" style={{ color: '#e3881d', fontWeight: '700', fontSize: '1.22em' }}>
                  You rated {rating} stars! 🌟 Thank you!
                </div>
              )}
            </div>

            {/* ────────────────────────────────────────────────────────────────
                 LAB 6: AngularJS Filters – Resident Community Records
            ──────────────────────────────────────────────────────────────── */}
            <hr className="my-5 border-warning" />

            <h3 className="text-center mb-4" style={{ color: '#e3881d' }}>
              LAB 6 – AngularJS Filters (Resident Maintenance Records)
            </h3>

            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <div ng-app="residentApp" ng-controller="residentCtrl" style="padding:25px; background:#fffefde; border-radius:16px; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
                    <h4 style="color:#e3881d; text-align:center; margin-bottom:20px;">
                      Resident Maintenance & Rating Records
                    </h4>

                    <input type="text" placeholder="Search by Name or Apartment" 
                           ng-model="searchText" 
                           ng-focus="onFocus()" ng-blur="onBlur()"
                           style="width:100%; max-width:400px; padding:12px; margin:0 auto 20px; display:block; border:2px solid #ffd47e; border-radius:10px; font-size:16px;" />

                    <p style="color:#2e7d32; text-align:center; min-height:28px; font-weight:500;">{{message}}</p>

                    <button ng-click="reset()" 
                            style="display:block; margin:0 auto 25px; padding:10px 40px; background:linear-gradient(90deg,#ffeacb,#ffd47e); border:none; border-radius:30px; color:#6f412d; font-weight:bold; cursor:pointer; box-shadow:0 2px 10px #ffd47e66;">
                      Clear Search
                    </button>

                    <table border="1" cellpadding="12" style="width:100%; border-collapse:collapse; font-size:15px; background:#fff;">
                      <tr style="background:#e3881d; color:white;">
                        <th>ID</th>
                        <th>Resident Name</th>
                        <th>Apartment</th>
                        <th>Maintenance Due</th>
                        <th>Last Paid</th>
                        <th>Rating</th>
                        <th>Complaints Resolved</th>
                      </tr>
                      <tr ng-repeat="r in residents | filter:searchText"
                          ng-mouseenter="hoverIn()" ng-mouseleave="hoverOut()"
                          style="transition:background 0.2s; cursor:pointer;">
                        <td>{{r.id | number}}</td>
                        <td>{{r.residentName | uppercase}}</td>
                        <td>{{r.apartment | lowercase}}</td>
                        <td>{{r.maintenanceDue | currency:"₹"}}</td>
                        <td>{{r.lastPaidDate | date:'dd-MMM-yyyy'}}</td>
                        <td>{{r.rating}}</td>
                        <td>{{r.complaintsResolved}}</td>
                      </tr>
                    </table>

                    <p style="color:#8B4513; text-align:center; margin-top:20px; min-height:28px; font-weight:500;">{{hoverMessage}}</p>

                    <!-- AngularJS CDN -->
                    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>

                    <script>
                      var app = angular.module("residentApp", []);
                      app.controller("residentCtrl", function($scope, $http) {
                        $http.get("/residents.json").then(function(response) {
                          $scope.residents = response.data;
                        }).catch(function(err) {
                          console.error("Error loading residents.json:", err);
                        });

                        $scope.onFocus = function() { $scope.message = "Search field focused"; };
                        $scope.onBlur  = function() { $scope.message = "Search field lost focus"; };
                        $scope.reset   = function() { $scope.searchText = ""; };
                        $scope.hoverIn  = function() { $scope.hoverMessage = "Hovered over resident record"; };
                        $scope.hoverOut = function() { $scope.hoverMessage = ""; };
                      });
                    </script>
                  </div>
                `,
              }}
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default RatingStatistics;