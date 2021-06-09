import fetch from "unfetch";

const submitZendeskComment = async (comment, commentStatus, ticketId, recipients, removeFrom, oldEmailCCs) => {
    console.log("HEEEERE")
    const url = `../../api/getUsers`;
    console.log("DEALING W RECIPS\n\n\n", oldEmailCCs)
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization:
                'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKb2huRG9lIiwiaXNzIjoxNjIzMTIwMDkxLCJleHAiOjE2MjMyMDY0OTEsImlhdCI6MTYyMzEyMDA5MX0.B19w0EXd4cs2ENXiBTUaEwaiO94bTwtHX6jOHhY3PvBQwvenm_fWyvVOFn5apvOq7PuSRxhnM3-5L6Isgg9rVFCLFO1hsPe8tPUdiM5YMqHZlRr35fpCzESCieXHQKkDopdF5sHpjprC9yspSuGP6k_dMGEUre9wuY5xEwMMw6RtpyKZIU3f_6iuJhOaPNr8-MxEgldTd02z7prMNd_eXKOLhulOMeWPXOLDpTGe1xKJ5qHVZsw_uXrpLsp8eWklgcIFTtdOv-vm5A94A3ojfUrp9-WMSUS0nvWtNCd0272ag-m50YdP7t1EeWJOre5S2Pwj03uj1QGHKUPAFKlK1zCW3fkQSjML-9Ki__ppcN1LlIPBtoCHyXBXe8MpCMUgwSKVPWwlOjO-7lLQ9fW7K84WZJBGKNLPC3C_g1UUfu_0JF6mSyQnEEmy4A3zPrgOpM2vD_jFkL7VGq4wq7RymxXBvreWXB6_9dZT4s1AcMCaEAH7I08rt5N-l7SokM46uYLe-Dw7gMyN5En9xtNgSjC_qhRI_VsPFZsg0bnu49oCrFDFkr1tn_fqdPrrPijD8zMzt-0cELaWU06OQB_bPb6rUpcyQ7qy5mArqmbjouDCE08RKI7hbDVL_c5Q8a_tIm32T-jxFfbWK4-DxCx5vmcpXgy6mUAyzPwTIp5F9Ds'
            ,
        },
        body: JSON.stringify({ "hello":"hello"}),
    });

    if (res.ok) {
        return;
    }
};


export default submitZendeskComment;