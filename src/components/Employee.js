import axios from "axios";
import react, { useState } from "react";
import { toast } from "react-toastify";
import {
    Button,
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    CardTitle,
    Container,
    Form,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "reactstrap";
import base_url from "../axios_api/bootapi";

const Employee = ({ emp, update }) => {
    const [employee, setEmployee] = useState(emp);

    //for delete function
    const deleteData = (id) => {
        console.log(id);
        axios.delete(`${base_url}/employeedelete/?id=${id}`).then(
            (response) => {
                update(id);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    const handleForm = (e) => {
        postDataToServer(employee);
        e.preventDefault();
    };
    const postDataToServer = (data) => {
        axios.post(`${base_url}/updateEmployee`, data).then(
            (response) => {
                toast.success("Update Data ");
            },
            (error) => {
                console.log(error);
            }
        );
    };


    return (
        <>
            <Form onSubmit={handleForm} className="my-2">
                <Card>
                    <CardBody style={{ display: "flex" }}>
                        <Input className="mx-2  text-center" type="text" value={emp.empId} />
                        <Input
                            className="mx-2 text-center"
                            type="text"
                            defaultValue={emp.name}
                            onChange={(e) => {
                                setEmployee({ ...employee, name: e.target.value });
                            }}
                        ></Input>
                        <Input
                            className="mx-2 text-center"
                            type="text"
                            defaultValue={emp.address}
                            onChange={(e) => {
                                setEmployee({ ...employee, address: e.target.value });
                            }}
                        ></Input>
                        <Input
                            className="mx-2 text-center"
                            type="text"
                            defaultValue={emp.department}
                            onChange={(e) => {
                                setEmployee({ ...employee, department: e.target.value });
                            }}
                        ></Input>
                        <Container className="text-center">
                            <Button
                                color="danger"
                                className="mx-2"
                                onClick={() => {
                                    deleteData(emp.empId);
                                }}
                            >
                                Delete
                            </Button>

                            <Button
                                color="warning" type="submit"

                            >
                                Update
                            </Button>
                        </Container>
                    </CardBody>
                </Card>
            </Form>
        </>
    );
};
export default Employee;
