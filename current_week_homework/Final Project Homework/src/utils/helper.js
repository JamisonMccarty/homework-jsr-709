export const stripWhiteSpace = (string) => {
  string = string.replace(/\s+/g, '-');
  return string
};

export const generateKey = (index) => {
    return `${index}_${new Date().getTime()}`;
}


    // 
    //   <ul>
    //     <li className="list-group-item">
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li className="list-group-item">
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li className="list-group-item">
    //       <Link to="/contacts">Contacts</Link>
    //
    //       {mockBlog.map((post, index) => {
    //         return <Link key={generateKey(index)} to={`/${stripWhiteSpace(post.title)}`}>{post.title}</Link>;
    //       })}
    //     </li>
    //   </ul>
    //
    //
    //
    //   {this.state.mockBlog.map((post, index) => {
    //     return <Link key={generateKey(index)} to={`/${stripWhiteSpace(post.title)}`}>{post.title}</Link>;
    //   })}
    //
    //
    //   {this.state.mockBlog.map((post, index)=>{
    //     return (<Route key={generateKey(index)} path={`/${stripWhiteSpace(post.title)}`} render={()=>{
    //       return <BlogPost content={post} />
    //     }}/>
    //   )
    // })}
