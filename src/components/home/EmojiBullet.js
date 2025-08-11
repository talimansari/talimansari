import resume from "../../img/talimResume.pdf"
import { Box } from "@mui/material";

function EmojiBullet(props) {
    const { emoji, text, link } = props;
    console.log(props)
    return (
        <Box component={'li'} fontSize={'1.2rem'} lineHeight={1.5} style={{ cursor: 'default' }}>
            <Box component={'span'} aria-label="cheese"
                role="img"
                mr={{ xs: '0.5rem', md: '1rem' }} fontSize={'1.5rem'}>{emoji}</Box>{text}
            {link && (
                link === "resume" ? (
                    <a
                        href={resume}
                        download="talimResume"
                        className="link link-primary"
                        style={{color:"#4a00ff", fontSize:"1.3rem"}}
                    >
                        resume
                    </a>
                ) : link.includes("@") ? (
                    <a href={`mailto:${link}`} className="link link-primary"
                    style={{color:"#4a00ff", fontSize:"1.3rem"}}
                    >
                        touch!
                    </a>
                ) : (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="link link-primary"
                    style={{color:"#4a00ff", fontSize:"1.3rem"}}
                    >
                        Rocky Mountain Technologies India Pvt Ltd
                    </a>
                )
            )}

        </Box>
    );
}

export default EmojiBullet;