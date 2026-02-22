import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import catAvatar from '../assets/cat-avatar.png';
import { validateUserLoginForm } from '../utils/validateUserLoginForm';

const UserLoginForm = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const handleLogin = (values) => {
        const user = {
            id: Date.now(),
            avatar: catAvatar,
            username: values.username,
        };
        setCurrentUser(user);
        setLoginModalOpen(false);
    };

    return (
        <>
            {currentUser ? (
                <img src={currentUser.avatar} alt="user" className="user-avatar" />
            ) : (
                <button className="login-button" onClick={() => setLoginModalOpen(true)}>
                    Login
                </button>
            )}

            {loginModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <div className="modal-header">
                            <h5>Login</h5>
                            <button onClick={() => setLoginModalOpen(false)}>X</button>
                        </div>
                        <div className="modal-body">
                            <Formik
                                initialValues={{ username: '', password: '' }}
                                validate={validateUserLoginForm}
                                onSubmit={handleLogin}
                            >
                                <Form>
                                    <div className="mb-3">
                                        <label htmlFor="username">Username</label>
                                        <Field id="username" name="username" placeholder="Username" className="form-control" />
                                        <ErrorMessage name="username">
                                            {(msg) => <p className="text-danger">{msg}</p>}
                                        </ErrorMessage>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password">Password</label>
                                        <Field id="password" name="password" placeholder="Password" className="form-control" type="password" />
                                        <ErrorMessage name="password">
                                            {(msg) => <p className="text-danger">{msg}</p>}
                                        </ErrorMessage>
                                    </div>
                                    <button type="submit">Login</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserLoginForm;