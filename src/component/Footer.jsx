import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="main my-container">
                <div className="footer-header grid grid-cols-2 lg:grid-cols-5 gap-8 text-gray-50 mb-10 mt-32">
                    <div>
                        <h2 className='font-bold text-3xl '>CareerHub</h2>
                        <br />
                        <p className='font-normal text-base text-[#757575]'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <br />
                        <div className='flex items-center gap-2 w-10 h-10'>
                            <img src="/public/icons/facebook (1).png" alt="" />
                            <img src="/public/icons/twitter.png" alt="" />
                            <img src="/public/icons/instagram.png" alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='font-semibold text-xl'>Company</h4>
                        <br />
                        <br />
                        <div className='font-normal text-base text-[#757575]'>
                            <p>About Us</p>
                            <br />
                            <p>Work</p>
                            <br />
                            <p>Latest News</p>
                            <br />
                            <p>Careers</p>
                            <br />
                        </div>

                    </div>
                    <div>
                        <h4 className='font-semibold text-xl'>Product</h4>
                        <br />
                        <br />
                        <div className='font-normal text-base text-[#757575]'>
                            <p>Prototype</p>
                            <br />
                            <p>Plans & Pricing</p>
                            <br />
                            <p>Customers</p>
                            <br />
                            <p>Integrations</p>
                            <br />
                        </div>

                    </div>
                    <div>
                        <h4 className='font-semibold text-xl'>Support</h4>
                        <br />
                        <br />
                        <div className='font-normal text-base text-[#757575]'>
                            <p>Help Desk</p>
                            <br />
                            <p>Sales</p>
                            <br />
                            <p>Become a Partner</p>
                            <br />
                            <p>Developers</p>
                            <br />
                        </div>

                    </div>
                    <div>
                        <h4 className='font-semibold text-xl'>Contact</h4>
                        <br />
                        <br />
                        <div className='font-normal text-base text-[#757575] '>
                            <p>524 Broadway , NYC</p>
                            <br />
                            <p>+1 777 - 978 - 5570</p>
                            <br />
                        </div>

                    </div>
                </div>
                <hr />
                <div className="footer-footer flex justify-between items-center mt-12 mb-32">
                    <div>
                        <p className='font-normal text-base text-[#757575]'>@2023 CareerHub. All Rights Reserved</p>
                    </div>
                    <div>
                        <p className='font-normal text-base text-[#757575]'>Powered by CareerHub</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;