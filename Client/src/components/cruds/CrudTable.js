import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CrudTable() {
	const [cruds, setCruds] = useState([]);

	useEffect(function () {
		async function getCruds() {
			try {
				const response = await axios.get("http://localhost:8080/api/cruds");
				setCruds(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getCruds();
	}, []);

	return (
		<div className="container" >
			<div >
				<h2>
					User Management System
					<p>
						<Link to="/cruds/new" className="btn btn-primary float-right">
							Create User
						</Link>
					</p>
				</h2>
				<hr />
			</div>
		
                        <div className="table-responsive ">
			<table style={{backgroundColor:"moccasin", borderRadius:"50px"}} className="table riped  table-hover table-bordered container">
				<thead >
					<tr style={{backgroundColor:"paleturquoise"}}>
						<th>Company Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Location</th>
						<th>View</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{cruds &&
						cruds.map((crud) => {
							return (
								<tr key={crud._id}>
									<td>
										<Link to={`/cruds/${crud._id}`} className="link-line">
											{crud.companyName}
										</Link>
									</td>
									<td>{crud.phone}</td>
									<td>{crud.email}</td>
									<td>{crud.location}</td>
									<td>
										<Link to={`/cruds/${crud._id}`} className="btn btn-outline-warning">
											View
										</Link>
									 
									</td>
									<td>
									<Link
										to={`/cruds/${crud._id}/edit`}
										className="btn btn-outline-primary"
									>
										Edit
									</Link>
									</td>
									<td>
										<Link
											to={`/cruds/${crud._id}/delete`}
											className="btn btn-outline-danger"
										>
											Delete
										</Link>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
			</div>
		</div>
	);
}

export default CrudTable;
