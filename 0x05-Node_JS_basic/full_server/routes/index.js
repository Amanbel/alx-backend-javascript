import AppController from '../controllers/AppController'; // eslint-disable-next-line
import StudentsController from '../controllers/StudentsController'; // eslint-disable-next-line

const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;
