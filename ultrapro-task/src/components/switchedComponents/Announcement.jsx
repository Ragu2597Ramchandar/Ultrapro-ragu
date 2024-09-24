import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import announcementData from '../../datas/announcementData '; // Import your data
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AnnouncementComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Show 3 items per page

  const handlePageChange = (page) => setCurrentPage(page);

  // Paginate data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = announcementData.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(announcementData.length / itemsPerPage);

  return (
    <Container className="mt-5">
      <Row>
        {currentItems.map((item, index) => (
          <Col lg={4} md={6} sm={12} key={index} className="mb-4">
            <Card className="bg-dark text-white rounded-card">
              <Card.Img 
                variant="top" 
                src={item.img} 
                alt={`Image ${index + 1}`} 
                className="card-img-top rounded-top" 
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text>{item.date}</Card.Text>
                  <span>&rarr;</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination Section */}
      <div className="d-flex justify-content-center my-3">
        <Button 
          className="mx-2 bg-dark text-white border-dark" 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </Button>
        {[...Array(totalPages)].map((_, idx) => (
          <Button
            key={idx}
            className={`mx-2 ${currentPage === idx + 1 ? 'bg-warning text-dark' : 'bg-dark text-white'}`}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </Button>
        ))}
        <Button 
          className="mx-2 bg-dark text-white border-dark" 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          <FaChevronRight />
        </Button>
      </div>
    </Container>
  );
};

export default AnnouncementComponent;
