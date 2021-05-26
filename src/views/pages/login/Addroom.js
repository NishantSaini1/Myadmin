import React, { useState, useEffect } from 'react';
import {
    Link,
    useHistory
  } from "react-router-dom";
  import {
    Alert,
    Jumbotron,
    Spinner,
    Form,
    Button,
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import Moment from 'moment';
import {auth,firebase,firestore} from "firebase";
import fire from "../database/firebase";
import CIcon from '@coreui/icons-react'
import   Googlelogin from "./Googlelogin";
function Addroom  ()  {  
    const history = useHistory();
    const [room, setRoom] = useState({ roomname: '' });
    const [showLoading, setShowLoading] = useState(false);
    const ref = fire.database().ref('rooms/');

    const save = (e) => {
        e.preventDefault();
        setShowLoading(true);
        ref.orderByChild('roomname').equalTo(room.roomname).once('value', snapshot => {
            if (snapshot.exists()) {
                return (
                    <div>
                        <Alert color="primary">
                            Room name already exist!
                        </Alert>
                    </div>
                );
            } else {
                const newRoom = fire.database().ref('rooms/').push();
                newRoom.set(room);
                history.goBack();
                setShowLoading(false);
            }
        });
    };
    const onChange = (e) => {
        e.persist();
        setRoom({...room, [e.target.name]: e.target.value});
    }

    return (
        <div>
            {/* {showLoading &&
                <Spinner color="primary" />
            } */}
            <Jumbotron>
                <h2>Please enter new Room</h2>
                <Form onSubmit={save}>
                    <FormGroup>
                        <Label>Room Name</Label>
                        <Input type="text" name="roomname" id="roomname" placeholder="Enter Room Name" value={room.roomname} onChange={onChange} />
                    </FormGroup>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Jumbotron>
        </div>
    );

 }
 

export default Addroom 
