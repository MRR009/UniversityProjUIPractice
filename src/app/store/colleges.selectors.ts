import { College } from '../entity/college.entity';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';


export interface ProductGroup {
    college: College;
    count: number;
  }

export const filteredColleges = createSelector(
    createFeatureSelector('collegeEntries'),
    (state: College[]) => {
        var map: Map<number, ProductGroup> = new Map;
    
        state.forEach(p => {
          if (map.get(p.collegeId)) {
            (map.get(p.collegeId) as ProductGroup).count++;
          } else {
            map.set(p.collegeId, { college: p, count: 1 });
          }
        })
    
        const sortedMap = new Map([...map.entries()].sort());
        return Array.from(sortedMap.values());
      }
)