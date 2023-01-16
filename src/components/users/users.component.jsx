

const Users = (props)=>{

    const { data } = props;

    return (
        <div>
            <ul>
                {
                    data.map((user)=>{
                        return <li>{user.id}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Users;
