import Resizer from "react-image-file-resizer";
import axios from "axios";

export const uploadImage = (event) => {
    let file = event.target.files[0];

    return new Promise((resolve, reject) => {
        Resizer.imageFileResizer(
            file,
            1200,
            1200,
            "jpeg",
            100,
            0,
            uri => {
                let formData = new FormData();
                formData.append("file", uri);
                axios
                    .post("/api/upload-image", formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                    .then(res => {
                        resolve(res.data.result)
                    }).catch(err => {
                    reject(err)
                })
            },
            "file"
        );
    })
}

export const downloadImages = async (idList) => {
    let images = []
    await
        axios
            .all(idList.map(singleId =>
                axios.get(`/api/get-uploaded-Image/`, {
                        params: {
                            imageId: singleId
                        }
                    }
                )))
            .then(axios.spread((...res) => {
                res.map(singleRes => {
                    images.push(Buffer.from(singleRes.data.result.image.data).toString('base64'))
                })
            }))
            .catch((err) => {
                console.log(err)
            });
    return images;
}

export const downloadImage = async (id) => {
    let image = null
    await axios.get(`/api/get-uploaded-Image/`, {
        params: {
            imageId: id
        }
    }).then(res => {
        image = Buffer.from(res.data.result.image.data).toString('base64')
    }).catch(err => {
        console.log(err)
    })
    return image;
}
