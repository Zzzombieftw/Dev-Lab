import { Router } from 'express'
import * as skillsCrtl from "../controllers/skills.js"
const router = Router()




router.get('/', skillsCrtl.index )
router.get('/new', skillsCrtl.new)
router.get('/:id', skillsCrtl.show)
router.post('/', skillsCrtl.create)
router.delete('/:id', skillsCrtl.delete)
router.get("/:id/edit", skillsCrtl.edit)

export {
  router
}
