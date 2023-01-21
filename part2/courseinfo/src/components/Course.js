import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = (props) => {
  const courses = props.courses.map(course => {
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  })
  
  return (
    <>
      {courses}
    </>
  )
}

export default Course;