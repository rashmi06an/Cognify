
import React from 'react';
import './CareerResults.css';
import ibmImg from '../assets/IBM.jpg';
import bitsImg from '../assets/BitsPilani.png';
import iimImg from '../assets/IIM_Ahmedabad_New.jpg';
import iiitImg from '../assets/IIIT_Hyderabad.png';
import iitDelhiImg from '../assets/IIT_Delhi.png';

const CareerResults = () => {
    return (
        <div className="career-results-page">
            <div className="career-results-container">

                <section className="career-matches-section">
                    <h2 className="section-title">Your Top Career Matches (Based on Assessment)</h2>
                    <div className="career-cards-grid">
                        <div className="career-card">
                            <div className="career-card-icon software-eng-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 12H8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 12H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 12H16.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Software Engineer (95%)</h3>
                            <p>Software Engineer is an excellent match for you. Your strong technical aptitude, systematic problem-solving skills, and passion for building innovative solutions align perfectly with this role. You excel at translating complex requirements into elegant code and thrive in collaborative development environments.</p>
                            <button className="explore-path-btn">Explore Path</button>
                        </div>

                        <div className="career-card">
                            <div className="career-card-icon data-sci-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Data Scientist (88%)</h3>
                            <p>Data Scientist is a strong fit for your profile. Your analytical mindset, statistical reasoning abilities, and curiosity for uncovering insights from data position you well for this field. You have the technical foundation and investigative approach needed to extract meaningful patterns and drive data-informed decision-making.</p>
                            <button className="explore-path-btn">Explore Path</button>
                        </div>

                        <div className="career-card">
                            <div className="career-card-icon pm-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Product Manager (82%)</h3>
                            <p>Product Manager is a solid match for your skillset. Your strategic thinking, communication abilities, and user-centric perspective make you well-suited for this role. You demonstrate the cross-functional collaboration skills and business acumen required to guide products from conception to market success.</p>
                            <button className="explore-path-btn">Explore Path</button>
                        </div>
                    </div>
                </section>

                <section className="search-filter-section">
                    <div className="search-bar-container">
                        <div className="search-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <input type="text" placeholder="Search for Colleges, Courses, or Locations..." className="search-input" />
                    </div>
                    <button className="advanced-filters-btn">
                        Advanced Filters
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 21V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 10V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 21V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 12V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 14H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 16H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </section>

                <section className="featured-college-section">
                    <h2 className="section-title">Featured College Result: IIT Delhi</h2>
                    <div className="featured-card">
                        <div className="featured-image-container">
                            <div className="featured-image-placeholder" style={{ backgroundImage: `url(${iitDelhiImg})` }}>
                                <span>IIT DELHI</span>
                            </div>
                        </div>
                        <div className="featured-details">
                            <div className="rank-badge">Rank #1</div>

                            <div className="featured-info-grid">
                                <div className="info-item">
                                    <span className="info-label">Technical</span>
                                    <span className="info-value">Cut-off:</span>
                                    <span className="info-highlight">99.5%</span>
                                </div>
                                <div className="info-item">
                                    <span className="info-label">Delhi</span>
                                    <span className="info-value">Fees:</span>
                                    <span className="info-highlight">₹8.5L</span>
                                </div>
                            </div>

                            <div className="career-fit-info">
                                <span className="info-label">Career Fit:</span>
                                <p>Perfect for Software Engineer, Data Scientist</p>
                            </div>

                            <div className="popular-courses-info">
                                <span className="info-label">Popular Courses:</span>
                                <p>Computer Science, Mechanical, Electrical, AI/ML, Robotics</p>
                            </div>

                            <button className="view-details-btn">
                                View Details & Apply
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="college-grid-section">
                    <div className="college-grid">
                        {[
                            { name: 'IBM', tag: 'Technical', cutoff: '99.5%', fees: '₹40L', image: ibmImg },
                            { name: 'BITS PILANI', tag: 'Technical', cutoff: '96.5%', fees: '₹25L', image: bitsImg },
                            { name: 'IIM', tag: 'Management', cutoff: '99.2%', fees: '₹35.0L', image: iimImg },
                            { name: 'IIIT HYDERABAD', tag: 'Technical', cutoff: '98.5%', fees: '₹25L', image: iiitImg }
                        ].map((college, index) => (
                            <div className="college-card" key={index}>
                                <div className="college-image-placeholder" style={{ backgroundImage: `url(${college.image})` }}>
                                </div>
                                <div className="college-card-content">
                                    <h3>{college.name}</h3>
                                    <span className="college-tag">{college.tag}</span>
                                    <div className="college-stats">
                                        <div>Cut-off: <strong>{college.cutoff}</strong></div>
                                        <div>Fees: <strong>{college.fees}</strong></div>
                                    </div>
                                    <button className="card-view-btn">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CareerResults;
