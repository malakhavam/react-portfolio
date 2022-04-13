import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
} from "react-mdl";

class MyProjects extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <section className="projects-grid">
          <Grid className="demo-grid-3">
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",
                    background: "url(assets/projects/tech-blog.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>The Tech Blog</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://malakhava-tech-blog.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href="https://github.com/malakhavam/tech-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",
                    background: "url(assets/projects/budget-tracker.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>Budget Tracker</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://malakhava-budget-tracker.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href="https://github.com/malakhavam/budget-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/projects/food-century-fox.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>Food Century Fox</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/malakhavam/movie-recipe-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href="https://malakhavam.github.io/movie-recipe-project/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/projects/redi2medi.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>REDI2MEDI</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://redi4medi.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href="https://github.com/TrevorL0ng/Redi2Medi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card shadow={5} style={{ minWidth: 450, margin: "auto" }}>
                <CardTitle
                  style={{
                    color: "fff",
                    height: "250px",

                    background: "url(assets/projects/meow-care.png) center/cover",
                  }}
                ></CardTitle>
                <CardText>Meow Care</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/malakhavam/meow-care"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DEPLOYED
                  </Button>
                  <Button
                    colored
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </Button>
                </CardActions>
              </Card>
            </Cell>
            
        </Grid>
        </section>
      </div>
    );
  }
}

export default MyProjects;