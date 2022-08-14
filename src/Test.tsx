function TestPage() {
  return (
    <div className="container text-center" style={{ background: "violet" }}>
      <div className="row row-cols-md-3">
        <div className="">.col-md-8</div>
        <div className="">.col-6 .col-md-4</div>
        {/* <div className="col-md-8">.col-md-8</div>
          <div className="col-6 col-md-4">.col-6 .col-md-4</div> */}
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="row">
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
        <div className="col-6 col-md-4">.col-6 .col-md-4</div>
      </div>
    </div>
  )
}

export default TestPage
