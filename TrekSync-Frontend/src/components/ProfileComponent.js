import { useEffect, useState } from "react";
import { Col, Container, Navbar, Row, Table } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";
import "../CSS/Style.css";
export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const tid = JSON.parse(localStorage.getItem("loggedtourist"));
    console.log(tid);
    setProfile(tid);
  }, []);

  return (
    <div>
      <NavbarComponent />
      <Container>
      
        <div className="ProfilemainDiv">
          
          <table className="ProfileTable">
            <tr>
              <th colSpan={2}><h3>Profile</h3></th>
            </tr>
            <tr>
              
              <th>UserId :</th>
              <td>{profile && profile.loginid.uid}</td>
            </tr>
            <tr>
              <th>Name :</th>
              <td>
                {profile && profile.t_fname} {profile && profile.t_lname}
              </td>
            </tr>
            <tr>
              <th>Email :</th>
              <td> {profile && profile.t_email}</td>
            </tr>
            <tr>
              <th>Contact no :</th>
              <td> {profile && profile.t_contact}</td>
            </tr>
            <tr>
              <th>Address :</th>
              <td colSpan={2}>
                
                {profile && profile.addressid.addressline}, &ensp;&ensp;
                {profile && profile.addressid.city} ,&ensp;&ensp;
                {profile && profile.addressid.district},&ensp;&ensp;
                {profile && profile.addressid.state},&ensp;&ensp;
                {profile && profile.addressid.country},&ensp;&ensp;
                {profile && profile.addressid.postal_code}&ensp;&ensp;
              </td>
            </tr>
          </table>
        </div>
      </Container>
      {/* <table className="table bordered">
            <tr>
                <th>UserId</th>
                <td>
                  {profile && profile.loginid.uid} 
                </td>
                <th>Name</th>
                <td>
                  {profile && profile.t_fname} {profile && profile.t_lname}
                </td>
              </tr>

              <tr>
                <th>Email</th>
                <td> {profile && profile.t_email}</td>
                <th>Contact no</th>
                <td> {profile && profile.t_contact}</td>
              </tr>
             
            <tr>
                <td colSpan={4}><h3>Address</h3></td>
            </tr>          
              <tr>
                <th>Address Line</th>
                <td> {profile && profile.addressid.addressline}</td>
                <th>City</th>
                <td> {profile && profile.addressid.city}</td>
              </tr>
             
              <tr>
                <th>District</th>
                <td> {profile && profile.addressid.district}</td>
                <th>Country</th>
                <td> {profile && profile.addressid.country}</td>
              </tr>
            
              <tr>
                <th>State</th>
                <td> {profile && profile.addressid.state}</td>
                <th>Pincode</th>
                <td> {profile && profile.addressid.postal_code}</td>
              </tr>
             
            </table>
            */}
    </div>
  );
}