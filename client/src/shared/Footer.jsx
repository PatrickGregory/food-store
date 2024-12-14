import React from 'react'
import logo from '../assets/cakelogo.png'

function Footer() {
    return (
        <div>
            <footer className="footer bg-red-100 text-base-content p-10">
                <aside>
                   <img src={logo} alt="icecream" className='w-48 h-40'/>
                </aside>
                <nav>
                    <h6 className="footer-title text-xl text-red-400">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl text-red-400">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl text-red-400">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
