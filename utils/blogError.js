const blogError = (err) => {
    let errors = { topic: "", content: "", category: "" };

    if(err.code === 11000) {
        errors.message = "Duplicate field detected";
        return errors;
    }
    
    if(err.message === "blog not found") {
        errors.message = "Blog not found";
        return errors;
    }

    if(err.name === "ValidationError") {
        Object.values(err.errors).forEach((error) => {
            if (error.properties && error.properties.path) {
                errors[error.properties.path] = error.properties.message;
            }
        });
        return errors;
    }

    return errors;
};



module.exports = blogError;