const data = {
    "1010": {
        "account_name": "Advertising And Marketing",
        "current": "5,000",
        "previous": "3,200",
        "children_total_current": "8,500",
        "children_total_previous": "4,000",
        "children": {
            "1011": {
                "account_name": "Offline Marketing",
                "current": "2,000",
                "previous": "500",
            },
            "1012": {
                "account_name": "Online Marketing",
                "current": "1,500",
                "previous": "300",
            }
        }
    },
    "1020": {
        "account_name": "Bank Fees",
        "current": "750",
        "previous": "800",
    },
    "1030": {
        "account_name": "IT and Internet Expenses",
        "current": "10,000",
        "previous": "5,500",
        "children_total_current": "11,500",
        "children_total_previous": "6,000",
        "children": {
            "1031": {
                "account_name": "Internet Expenses",
                "current": "0",
                "previous": "0",
                "children_total_current": "1,500",
                "children_total_previous": "500",
                "children": {
                    "10311": {
                        "account_name": "Airtel",
                        "current": "0",
                        "previous": "500",
                        "children_total_current": "1,500",
                        "children_total_previous": "500",
                        "children": {
                            "103111": {
                                "account_name": "Xtreme Fiber",
                                "current": "1,500",
                                "previous": "0",
                            }
                        }
                    }
                }
            }
        }
    }
}


export default data;