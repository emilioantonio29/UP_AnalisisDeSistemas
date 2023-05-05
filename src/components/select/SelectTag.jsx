import React, {useState, useContext} from "react";

const SelectTag = () => {

    return (
        <>
            <div className="d-flex">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Categorias</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </>
    );
}

export default SelectTag;