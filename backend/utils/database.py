from sqlalchemy import create_engine # type: ignore
from sqlalchemy.orm import declarative_base # type: ignore
from sqlalchemy.orm import sessionmaker # type: ignore
import os

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()