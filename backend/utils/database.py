from sqlalchemy import create_engine # type: ignore
from sqlalchemy.orm import declarative_base # type: ignore
from sqlalchemy.orm import sessionmaker # type: ignore
from dotenv import load_dotenv
import os

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if DATABASE_URL is None:
    print(".env file not found or DATABASE_URL is missing")
    raise ValueError("No DATABASE_URL found. Please check your .env file.")

assert DATABASE_URL is not None

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()